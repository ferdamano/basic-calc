'use strict';

test('evaluates arithmetic using eval', () => {
  const sampleArithmetic = '2 + 3'; 
  // Set up our document body
  document.body.innerHTML =
    `
      <table>
        <tr>
          <td><input type="button" value="c"/></td>
          <td colspan="3"><input type="text" id="arithmetic" value="${sampleArithmetic}"/></td>
        </tr>
        <tr>
          <td><input type="button" value="1"/></td>
          <td><input type="button" value="=" /> </td>
        </tr>
      </table>
    `;
  require('./site');

  document.querySelectorAll('input[type=button]').forEach(element => {
    if(element.value == "="){
      element.click();
    }
  });

  expect(eval(document.getElementById('arithmetic').value)).toEqual(eval(sampleArithmetic));
  document.querySelectorAll('input[type=button]').forEach(element => {
    if(element.value == 'c'){
      element.click();
    }
  });
  expect(document.getElementById('arithmetic').value).toEqual('');

  document.querySelectorAll('input[type=button]').forEach(element => {
    if(element.value == "1"){
      element.click();
    }
  });

  expect(document.getElementById('arithmetic').value).toEqual('1');
});