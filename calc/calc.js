  const result = document.getElementById('result');
  function addValue(val) {
    result.value += val;
  }
  function clr() {
    result.value = '';
  }
  function del() {
    result.value = result.value.slice(0, -1);
  }
  function calculate() {
    try {
      result.value = eval(result.value);
    } catch {
      result.value = 'Error';
    }
  }
