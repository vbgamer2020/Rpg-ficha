function calculateHP() {
    var constitution = document.getElementById('constitution').value;
    var level = document.getElementById('level').value;
    var specialization = document.getElementById('specialization').value;
    var modifier = Math.floor((constitution - 10) / 2);
    var hp;

    // Adicionando cálculos de HP com base na especialização
    switch (specialization) {
        case 'especializacao1':
            if (level == 1) {
                hp = 12 + modifier;
            } else {
                hp = (12 + modifier) + (10 + modifier) * (level - 1); // ajustado para que o nível multiplique apenas com (10 + modifier)
            }
            break;
        case 'especializacao2':
            if (level == 1) {
                hp = 12 + modifier;
            } else {
                hp = (12 + modifier) + (10 + modifier) * (level - 1); // ajustado para que o nível multiplique apenas com (10 + modifier)
            }
            break;

        case 'especializacao3':
            if (level == 1) {
                hp = 10 + modifier;
            } else {
                hp = (10 + modifier) + (8 + modifier) * (level - 1); // ajustado para que o nível multiplique apenas com (10 + modifier)
            }
            break;
        case 'especializacao4':
            if (level == 1) {
                hp = 10 + modifier;
            } else {
                hp = (10 + modifier) + (8 + modifier) * (level - 1); // ajustado para que o nível multiplique apenas com (10 + modifier)
            }
            break;

        case 'especializacao5':
            if (level == 1) {
                hp = 10 + modifier;
            } else {
                hp = (10 + modifier) + (8 + modifier) * (level - 1); // ajustado para que o nível multiplique apenas com (10 + modifier)
            }
            break;
        case 'especializacao6':
            if (level == 1) {
                hp = 16 + modifier;
            } else {
                hp = (16 + modifier) + (12 + modifier) * (level - 1); // ajustado para que o nível multiplique apenas com (10 + modifier)
            }
            break;
        // adicione mais casos para todas as 6 especializações
    }

    document.getElementById('result').innerHTML = "O HP é: " + hp;
}




