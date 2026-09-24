const storageKey = "student-management-records";
let students = loadStudents();
let editingId = null;

const form = document.querySelector("#studentForm");
const rollNoInput = document.querySelector("#rollNo");
const nameInput = document.querySelector("#studentName");
const courseInput = document.querySelector("#course");
const marksInput = document.querySelector("#marks");
const searchInput = document.querySelector("#searchInput");
const tableBody = document.querySelector("#studentTableBody");
const emptyState = document.querySelector("#emptyState");
const emptyTitle = document.querySelector("#emptyTitle");
const emptyMessage = document.querySelector("#emptyMessage");
const formStatus = document.querySelector("#formStatus");

function loadStudents() {
	try {
		const savedStudents = JSON.parse(localStorage.getItem(storageKey));
		return Array.isArray(savedStudents) ? savedStudents : [];
	} catch (error) { return []; }
}

function saveStudents() { localStorage.setItem(storageKey, JSON.stringify(students)); }

function getGrade(marks) {
	if (marks >= 90) return "A+";
	if (marks >= 80) return "A";
	if (marks >= 70) return "B+";
	if (marks >= 60) return "B";
	if (marks >= 50) return "C";
	return "F";
}

function clearErrors() {
	document.querySelectorAll(".error-message").forEach((element) => { element.textContent = ""; });
	document.querySelectorAll(".form-row input").forEach((input) => input.classList.remove("input-error"));
}

function showError(input, message) {
	input.classList.add("input-error");
	document.querySelector(`#${input.id}Error`).textContent = message;
}

function getFormStudent() {
	clearErrors();
	const rollNo = rollNoInput.value.trim();
	const name = nameInput.value.trim();
	const course = courseInput.value.trim();
	const marks = Number(marksInput.value);
	let isValid = true;
	if (!/^[0-9]+$/.test(rollNo)) { showError(rollNoInput, "Roll number must contain only numbers."); isValid = false; }
	if (!/^[A-Za-z ]+$/.test(name) || !name) { showError(nameInput, "Name must contain only letters and spaces."); isValid = false; }
	if (!course) { showError(courseInput, "Course is required."); isValid = false; }
	if (marksInput.value === "" || !Number.isFinite(marks) || marks < 0 || marks > 100) { showError(marksInput, "Enter marks between 0 and 100."); isValid = false; }
	if (students.some((student) => student.rollNo === rollNo && student.id !== editingId)) { showError(rollNoInput, "This roll number already exists."); isValid = false; }
	return isValid ? { rollNo, name, course, marks } : null;
}

function escapeHtml(value) { return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character])); }

function renderStudents() {
	const searchTerm = searchInput.value.trim().toLowerCase();
	const filteredStudents = students.filter((student) => [student.rollNo, student.name, student.course].some((value) => value.toLowerCase().includes(searchTerm)));
	tableBody.innerHTML = filteredStudents.map((student) => `<tr><td class="roll-cell">${escapeHtml(student.rollNo)}</td><td><strong>${escapeHtml(student.name)}</strong></td><td>${escapeHtml(student.course)}</td><td>${student.marks.toFixed(2)}</td><td><span class="grade grade-${getGrade(student.marks).replace("+", "plus")}">${getGrade(student.marks)}</span></td><td class="action-cell"><button class="icon-button edit-button" data-id="${student.id}" title="Edit ${escapeHtml(student.name)}" aria-label="Edit ${escapeHtml(student.name)}">✎</button><button class="icon-button delete-button" data-id="${student.id}" title="Delete ${escapeHtml(student.name)}" aria-label="Delete ${escapeHtml(student.name)}">⌫</button></td></tr>`).join("");
	document.querySelector("#totalStudents").textContent = students.length;
	const average = students.length ? students.reduce((sum, student) => sum + student.marks, 0) / students.length : 0;
	document.querySelector("#averageMarks").textContent = average.toFixed(2);
	document.querySelector("#highestMarks").textContent = students.length ? Math.max(...students.map((student) => student.marks)).toFixed(2) : "0";
	emptyState.classList.toggle("visible", filteredStudents.length === 0);
	emptyTitle.textContent = students.length && searchTerm ? "No matching students" : "No students added yet";
	emptyMessage.textContent = students.length && searchTerm ? "Try a different name, roll number, or course." : "Add your first student using the form to see them here.";
}

function resetForm() {
	form.reset(); clearErrors(); editingId = null;
	document.querySelector("#formTitle").textContent = "Add a student";
	document.querySelector("#submitButton").textContent = "Add student";
	document.querySelector("#cancelButton").classList.add("hidden"); formStatus.textContent = "";
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const studentData = getFormStudent();
	if (!studentData) return;
	if (editingId) { students = students.map((student) => student.id === editingId ? { ...student, ...studentData } : student); formStatus.textContent = "Student record updated."; }
	else { students.push({ id: Date.now().toString(), ...studentData }); formStatus.textContent = "Student added successfully."; }
	saveStudents(); renderStudents(); setTimeout(resetForm, 900);
});

document.querySelector("#cancelButton").addEventListener("click", resetForm);
searchInput.addEventListener("input", renderStudents);
tableBody.addEventListener("click", (event) => {
	const button = event.target.closest("button");
	if (!button) return;
	const student = students.find((item) => item.id === button.dataset.id);
	if (!student) return;
	if (button.classList.contains("delete-button")) {
		if (window.confirm(`Delete ${student.name}'s record?`)) { students = students.filter((item) => item.id !== student.id); saveStudents(); renderStudents(); }
	} else {
		editingId = student.id; rollNoInput.value = student.rollNo; nameInput.value = student.name; courseInput.value = student.course; marksInput.value = student.marks;
		document.querySelector("#formTitle").textContent = "Edit student"; document.querySelector("#submitButton").textContent = "Update student"; document.querySelector("#cancelButton").classList.remove("hidden");
		document.querySelector(".form-panel").scrollIntoView({ behavior: "smooth", block: "start" });
	}
});

renderStudents();
