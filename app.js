var _a, _b, _c;
(_a = document.getElementById('editResume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var _a, _b;
    (_a = document.getElementById('resumeDisplay')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
    (_b = document.getElementById('editForm')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
    document.getElementById('editName').value = document.getElementById('name').textContent || '';
    document.getElementById('editEmail').value = document.getElementById('email').textContent || '';
    document.getElementById('editEducation').value = document.getElementById('education').textContent || '';
    document.getElementById('editSkills').value = document.getElementById('skills').textContent || '';
});
(_b = document.getElementById('saveChanges')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var _a, _b;
    document.getElementById('name').textContent = document.getElementById('editName').value;
    document.getElementById('email').textContent = document.getElementById('editEmail').value;
    document.getElementById('education').textContent = document.getElementById('editEducation').value;
    document.getElementById('skills').textContent = document.getElementById('editSkills').value;
    (_a = document.getElementById('resumeDisplay')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    (_b = document.getElementById('editForm')) === null || _b === void 0 ? void 0 : _b.classList.add('hidden');
});
(_c = document.getElementById('cancelEdit')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var _a, _b;
    (_a = document.getElementById('resumeDisplay')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    (_b = document.getElementById('editForm')) === null || _b === void 0 ? void 0 : _b.classList.add('hidden');
});
