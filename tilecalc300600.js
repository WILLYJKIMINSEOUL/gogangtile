document.getElementById('calculateBtn').addEventListener('click', function() {
  const width = parseFloat(document.getElementById('width').value);
  const height = parseFloat(document.getElementById('height').value);
  const depth = parseFloat(document.getElementById('depth').value);
  const waste = parseFloat(document.getElementById('waste').value);

  const wallTileCount = Math.ceil(((width * height / 1000000 * 2 / 1.44) * (waste / 100 + 1)) + ((height * depth / 1000000 * 2 / 1.44) * (waste / 100 + 1)));
  const floorTileCount = Math.ceil((width * height / 1000000 / 1.44) * (waste / 100 + 1));

  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `벽 타일 수량: ${wallTileCount} 박스(1.44m² 기준)<br>바닥 타일 수량: ${floorTileCount} 박스(1.44m² 기준)`;
});
