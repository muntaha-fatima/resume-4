document.getElementById('editResume')?.addEventListener('click', () => {
    document.getElementById('resumeDisplay')?.classList.add('hidden');
    document.getElementById('editForm')?.classList.remove('hidden');

    (document.getElementById('editName') as HTMLInputElement).value = (document.getElementById('name') as HTMLParagraphElement).textContent || '';
    (document.getElementById('editEmail') as HTMLInputElement).value = (document.getElementById('email') as HTMLParagraphElement).textContent || '';
    (document.getElementById('editEducation') as HTMLTextAreaElement).value = (document.getElementById('education') as HTMLParagraphElement).textContent || '';
    (document.getElementById('editSkills') as HTMLTextAreaElement).value = (document.getElementById('skills') as HTMLParagraphElement).textContent || '';
});

document.getElementById('saveChanges')?.addEventListener('click', () => {
    (document.getElementById('name') as HTMLParagraphElement).textContent = (document.getElementById('editName') as HTMLInputElement).value;
    (document.getElementById('email') as HTMLParagraphElement).textContent = (document.getElementById('editEmail') as HTMLInputElement).value;
    (document.getElementById('education') as HTMLParagraphElement).textContent = (document.getElementById('editEducation') as HTMLTextAreaElement).value;
    (document.getElementById('skills') as HTMLParagraphElement).textContent = (document.getElementById('editSkills') as HTMLTextAreaElement).value;

    document.getElementById('resumeDisplay')?.classList.remove('hidden');
    document.getElementById('editForm')?.classList.add('hidden');
});

document.getElementById('cancelEdit')?.addEventListener('click', () => {
    document.getElementById('resumeDisplay')?.classList.remove('hidden');
    document.getElementById('editForm')?.classList.add('hidden');
});
