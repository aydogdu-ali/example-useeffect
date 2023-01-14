// useEffect Hook 'u react  component yaşam döngüsünde kaldırma, güncelleme ve çekme gibi durumlarda kullanılır.
import React from 'react' 
import { useState, useEffect } from 'react' //Kullanacağım Hookları çalışıyorum.
import ListUser from "./ListUser" // listelediğim componenti import ediyorum.


const UseEffectExample = () => {

  const [user, setUser] = useState([]); // gelen veri array içinde olduğu için başlangıçı array veriyoruz.

  //Api den veri çekme fonksiyonumu tanımlıyorum
  // Bildiğiniz gibi bu fonksiyonun çalışması için çağrılması gerekir.

  const url = "https://api.github.com/users";

  const getUser = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  };
  // Ancak bunu aşağıda çağırırsak sayfa sonsuz döngüye gider.
  // Bunun engellenmesi için useEffect Hook'unu kullanıyoruz.
//   getUser();
//   console.log("veri geldi");

// Bu hook 'un bu şekilde yazılması demek sayfa ilk render olduğunda çalış bir  daha çalışma anlamındadır.
 useEffect(()=>{
    getUser()
 },[])


 // Bu hooku 3 bölümde inceleyebiliriz.
//  useEffect(() => {
//    first ()  1- Veri çekme ve güncelleme (fetch-localstorage)
 
//    return () => { 2- component yaşam döngünüsü durdurma /kaldırma
//      second
//    }
//  }, [third]) 3- bağımlılıklara göre tekrar  çalışır eğer bağımlılık varsa sayfa render olunca tekrar çalışır.
 

  return (
    <div>
      {/*state'te tutulan user bilgisini child componente gönderiyorum.*/}
      <ListUser user={user}/>

      
    </div>
  );
}

export default UseEffectExample