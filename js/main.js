'use stricts;'

{
  function createColumn (col) { // 要素数5の配列を作る関数を定義
    const source = [];
    for (let i = 0; i < 15; i++) { // まず要素数15の配列を作る
      source[i] = i + 1 + 15 * col; // Bは1...15,Iは16...30,...
    }

    const column = [];
    for (let i = 0; i < 5; i++) { // 次に上記の配列から5つの要素を選んで新配列を作る
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0]; //spliceの返り値は配列になるので注意
    }
    return column;
  }

  function createColumns () {
    const columns = [];
    for (let i = 0; i < 5; i++) {
      columns[i] = createColumn(i);
    }
    columns[2][2] = 'FREE';
    return columns;
  }
  
  function renderBingo (columns) {
    for (let row = 0; row < 5; row++) {
      const tr = document.createElement('tr');
      for (let col = 0; col < 5; col++) {
        const td = document.createElement('td');
        td.textContent = columns[col][row];
        tr.appendChild(td);
      }
      document.querySelector('tbody').appendChild(tr);
    }
  }
  
  const columns = createColumns();
  renderBingo(columns);
}