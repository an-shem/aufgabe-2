export const sectionLayoutTask_3 = ` <h2 class="task-titel">Unteraufgaben - 3</h2>
          <p class="task">Um die E-Mail-Adresse des Kunden zu erhalten, geben Sie den Kundenamen ein.</p>
          <div class="solution-wrapper">
            <div class="form-wrapper">
              <form class="clients-form">
                <label for="clients-name" class="clients-label">Geben Sie den Kundenamen ein:</label>
                <input list="clientsNameListe"  class="clients-input" type="text" id="clients-name" name="clientName">
                <datalist id="clientsNameListe">
                
                </datalist>
                <button class="clients-btn" type="submit">Schicken</button>
              </form>
            </div>
            <div class="solution">
              <h3 class="solution-titel">Die E-Mail-Adresse des von Ihnen ausgewählten Kunden:</h3>
             <div class="client-data">
               <p class="client-name"></p>
               <a class="client-e-mail"></a>
             </div>
            </div>
          </div>`;
