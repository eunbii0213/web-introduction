function printName()  {
  const name = document.getElementById('name').value;
  return name+"님, 저와 "+printCheckBoxCount();
}

function printCheckBoxCount(){
    const query = 'input[name="movie"]:checked';
      const selectedElements = document.querySelectorAll(query);

      // 선택된 목록의 갯수 세기
      return selectedElements.length+"개의 취향이 같으시네요!";
}