import axios from 'axios';
const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const kart = document.createElement("div");
  kart.setAttribute("class", "card");

  const headline = document.createElement("div");
  headline.setAttribute("class", "headline");
  headline.textContent = makale.anabaslik;
  kart.append(headline);

  const author = document.createElement("div");
  author.setAttribute("class", "author");
  kart.append(author);

  const imgContainer = document.createElement("div");
  imgContainer.setAttribute("class", "img-container");
  author.append(imgContainer);

  const img = document.createElement("img");
  img.setAttribute("src", makale.yazarFoto);
  imgContainer.append(img);

  const authorName = document.createElement("span");
  authorName.textContent = `${makale.yazarAdi} tarafından`;
  author.append(authorName);

  kart.addEventListener("click", () => {
    console.log(makale.anabaslik);
  });

  return kart;
};

const cardEkleyici =  (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler`
  //  (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize 
  // edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const hedef = document.querySelector(secici);

  axios
    .get("http://localhost:5001/api/makaleler")
    .then((response) => {
      console.log("response : " , response)
      const data = response.data;
      console.log("response data: " , data)

      for (const kategori in data.makaleler) {
        for (const makale of data.makaleler[kategori]) {
          console.log("makale :   ", makale)
          const kart = Card({
          anabaslik: makale.anabaslik,
          yazarFoto: makale.yazarFoto,
          yazarAdi: makale.yazarAdi,
        });
        kart.addEventListener("click", () => {
          console.log("makale basliği: ", makale.anabaslik);
        });
        hedef.appendChild(kart);
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });

  return hedef;
};


  

export { Card, cardEkleyici }
