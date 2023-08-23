document.getElementById('calculateBtn').addEventListener('click', function() {
  const width = parseFloat(document.getElementById('width').value);
  const height = parseFloat(document.getElementById('height').value);
  const depth = parseFloat(document.getElementById('depth').value);

  const wallTileCount = Math.ceil((width * depth * 2 / 1000000 / 1.44) + (height * depth * 2 / 1000000 / 1.44));
  const floorTileCount = Math.ceil((width * height / 1000000 / 1.44));

  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `벽 타일 수량: ${wallTileCount}개<br>바닥 타일 수량: ${floorTileCount}개`;
});
