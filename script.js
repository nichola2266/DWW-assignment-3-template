document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("grid");
    const gridSize = 72;

    // generate cells
    for(let i = 1; i <= gridSize; i++){
        grid.innerHTML += `
            <div id="cell-${i}" data-state="off" class="cell"></div>
        `;
    }

    grid.addEventListener("click", (e) => {
        const selectedCell = e.target;
        selectedCell.dataset.state = selectedCell.dataset.state === "off" ? "on" : "off";
        // console.log(target);

    })
});
