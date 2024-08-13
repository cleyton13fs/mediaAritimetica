function calculateAverage() {
    const input = document.getElementById('gradesInput').value;
    const grades = input.split(',').map(Number);

    if (grades.length === 0) {
        document.getElementById('result').textContent = 'Por favor, insira pelo menos uma nota.';
        return;
    }

    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    const average = sum / grades.length;

    document.getElementById('result').textContent = `A média aritmética é: ${average.toFixed(2)}`;
}
