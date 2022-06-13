test('displays correct input after adding listeners to input', () => {
  // Set up our document body
  document.body.innerHTML =
    `
      <table>
        <tr>
          <td></td>
          <td colspan="3"><input type="text" id="arithmetic"/></td>
        </tr>
        <tr>
          <td></td>
          <td><input type="button" value="1"/></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    `;
  
    require('./site');
  
  // Use jquery to emulate a click on our button
  document.querySelectorAll('input[type=button]').forEach(element => {
    if(element.value == "1"){
      element.click();
    }
});


  // Assert that the updateDisplay function was called, and that the
  // #arithmetic input's value was updated as we'd expect it to.
  expect(document.getElementById('arithmetic').value).toEqual('1');
});

test('evaluates arithmetic using eval', () => {
  const sampleArithmetic = '2 + 3'; 
  // Set up our document body
  document.body.innerHTML =
    `
      <table>
        <tr>
          <td></td>
          <td colspan="3"><input type="text" id="arithmetic" value="${sampleArithmetic}"/></td>
        </tr>
        <tr>
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
});
