
<h1>Register</h1>

<center><form method="POST">

  <label>
    <img src="user.svg">
    <input type="text">
  </label>

  <label>
    <img src="shield.svg">
    <input type="password" id="input-password">
  </label>

  <label>
    <img src="shield.svg">
    <input type="password" id="input-password-confirm">
  </label>

  <button type="submit">Register</button>

</form>
</center>


<style>
  form label{
    width: 100%;
    display: block;
  }
 form {
      border: 5px solid #f1f1f1;
      width: 50%;
      }
       input[type=text], input[type=password] {
      width: 30%;
      padding: 4px 4px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      box-sizing: border-box;
      }
  button {
      background-color: #8ebf42;
      color: white;
      padding: 4px 0;
      margin: 10px 0;
      border: none;
      cursor: grabbing;
      width: 20%;
      }
  h1 {
      text-align:center;
      fone-size:18;
      }
</style>