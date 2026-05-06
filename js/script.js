const opcoes = ['Pedra', 'Papel', 'Tesoura'];

const imagens = {
    Pedra: "./pedra.png",
    Papel: "./papel.png",
    Tesoura: "./tesoura.png"
};

let v = 0, d = 0, e = 0;

function abrirJogo(jogo) {
    let area = document.getElementById("areaJogo");

    if (jogo === "jokenpo") {
        area.innerHTML = `
            <h2>Jokenpô</h2>

            <div>
                <img src="./pedra.png" onclick="jogar('Pedra')" class="img-btn">
                <img src="./papel.png" onclick="jogar('Papel')" class="img-btn">
                <img src="./tesoura.png" onclick="jogar('Tesoura')" class="img-btn">
            </div>

            <div id="resultado"></div>
            <div id="escolhas"></div>

            <p id="placar">Vitórias: 0 | Derrotas: 0 | Empates: 0</p>
        `;
    }

    if (jogo === "dados") {
        area.innerHTML = `
            <h2>Batalha de Dados</h2>
            <button onclick="rolarDados()">🎲 Lançar</button>
            <p id="dado1"></p>
            <p id="dado2"></p>
            <p id="resultadoDados"></p>
        `;
    }

    if (jogo === "moeda") {
        area.innerHTML = `
            <h2>Cara ou Coroa</h2>
            <button onclick="jogarMoeda('Cara')">Cara</button>
            <button onclick="jogarMoeda('Coroa')">Coroa</button>
            <p id="resultadoMoeda"></p>
        `;
    }
}

function jogar(escolha) {
    let pc = opcoes[Math.floor(Math.random() * 3)];
    let res = "";

    if (escolha === pc) {
        res = "Empate!";
        e++;
    } else if (
        (escolha === "Pedra" && pc === "Tesoura") ||
        (escolha === "Papel" && pc === "Pedra") ||
        (escolha === "Tesoura" && pc === "Papel")
    ) {
        res = "Você venceu!";
        v++;
    } else {
        res = "Você perdeu!";
        d++;
    }

    document.getElementById("resultado").innerHTML = `<strong>${res}</strong>`;

    document.getElementById("escolhas").innerHTML = `
        <div style="display:flex; justify-content:center; gap:50px;">
            <div>
                <p>Você</p>
                <img src="${imagens[escolha]}" width="100">
                <p>${escolha}</p>
            </div>
            <div>
                <p>PC</p>
                <img src="${imagens[pc]}" width="100">
                <p>${pc}</p>
            </div>
        </div>
    `;

    document.getElementById("placar").innerText =
        `Vitórias: ${v} | Derrotas: ${d} | Empates: ${e}`;
}

function rolarDados() {
    let d1 = Math.floor(Math.random() * 6) + 1;
    let d2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("dado1").innerText = "Você: " + d1;
    document.getElementById("dado2").innerText = "PC: " + d2;

    let res = d1 > d2 ? "🔥 Você venceu!" :
              d2 > d1 ? "❌ Você perdeu!" : "😐 Empate!";

    document.getElementById("resultadoDados").innerText = res;
}

function jogarMoeda(escolha) {
    let sorteio = Math.random() < 0.5 ? "Cara" : "Coroa";

    let res = sorteio === escolha ? "🔥 Acertou!" : "❌ Errou!";

    document.getElementById("resultadoMoeda").innerText =
        `Deu: ${sorteio} - ${res}`;
}