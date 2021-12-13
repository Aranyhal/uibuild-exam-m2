const formElement = `
    <form id="form" >
    
      <form action="/action_page.php">
        <div class="container">
          <h1>Visszajelzés</h1>
          
          <input type="text" placeholder="Tárgy" name="name"  required>
          
          <textarea name="comment" placeholder="Megjegyzés"  cols="30" rows="10"></textarea>

         <div class="checkbox">
          <textarea name="checkbox" type="checkbox"  cols="30" rows="10"></textarea>
          <p>Elolvastam és elfogadom az <span>Adatkezelési Tájékoztatót.</span></p>
        </div>
      
          <button type="submit">Mentés</button>
        </div>
        
     </form> 
    </form>
`;

window.addEventListener("load", loadEvent);