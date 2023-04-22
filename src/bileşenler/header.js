const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

  const headerTAB = document.createElement("div");
  headerTAB.setAttribute("class", "header");

  const tarihTAB = document.createElement("span");
  tarihTAB.setAttribute("class", "date");
  tarihTAB.textContent = tarih;
  headerTAB.append(tarihTAB);

  const baslikTAB = document.createElement("h1");
  baslikTAB.textContent = baslik;
  headerTAB.append(baslikTAB);

  const yaziTAB = document.createElement("span");
  yaziTAB.setAttribute("class", "temp");
  yaziTAB.textContent = yazi;
  headerTAB.append(yaziTAB);



  return headerTAB;
}




const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
  const header1 =  Header("Arthur", "28.03.2021", "Kedim bu tarihte doğdu.");
  const seciciTAB = document.querySelector(secici);  
  seciciTAB.append(header1) ;

  return seciciTAB
}

export { Header, headerEkleyici }
