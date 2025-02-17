
# Book Store

Bu proje, bir E-ticaret Uygulaması olup, kullanıcıların ürünleri görüntüleyip sepete eklemelerini, sepeti görüntülemelerini ve işlem yapmalarını sağlayan basit bir uygulamadır. Proje, React ile geliştirilmiş ve modern web teknolojilerini kullanarak, kolayca yönetilebilir ve genişletilebilir bir yapı sunar.
## Kullanılan Teknolojiler ve Kütüphaneler


**React:** Uygulama, React ile geliştirilmiştir. React, kullanıcı arayüzleri oluşturmak için kullanılan bir JavaScript kütüphanesidir ve bu projede bileşen tabanlı yapı kullanılmıştır.

**React Router:** Farklı sayfalar arasında gezinmek için React Router v5 kullanılmaktadır. Sayfalar arasında yönlendirme yapılır.

**Styled Components:** Uygulama, stil yönetimini daha modüler ve okunabilir hale getirmek için Styled Components kullanır. Bileşen bazlı stiller, bileşenlerle birlikte yazılabilir.

**useContext:** KUygulamada, global state yönetimi için React'in useContext ve useReducer hook'ları kullanılmıştır. Bu sayede bileşenler arası veri paylaşımı daha yönetilebilir ve anlaşılır hale getirilmiştir.


**Context API:** ProductContext ve CartContext ile ürünler ve sepetin yönetimi yapılır. Bu yapılar ile uygulamanın her yerinden ürün ve sepet bilgilerine ulaşılabilir.


**React Hooks:** Uygulama, React'in fonksiyonel bileşenleri ve hook'ları ile geliştirilmiştir. Özellikle useState, useEffect ve useContext gibi hook'lar kullanılmaktadır.


**LocalStorage:** Tarayıcıda veri saklamak için kullanılır.


**Jest ve React Testing Library:** Test yazmak için kullanılır.
# Uygulama Özellikleri

## 1. Ürünler Sayfası (Products)
- Kullanıcılar, tüm ürünleri liste halinde görüntüleyebilir.
- Ürünler, ProductContext tarafından sağlanan bir products dizisinden gelir.
- Her ürünün üzerine tıklanarak, kullanıcılar bu ürünü sepete ekleyebilirler.


## 2. Sepet Sayfası (Shopping Cart)
- Kullanıcılar, sepete ekledikleri ürünleri liste halinde görüntüleyebilir.
- Sepetteki ürünlerin toplam fiyatı dinamik olarak hesaplanır.
- Sepet sayfası, CartContext tarafından sağlanan bir cart dizisinden gelir.
- Kullanıcılar ürünleri sepetten çıkarabilir ve işlem yapabilirler.

## 3. Navigation
- Uygulama içerisinde gezinmeyi sağlayan basit bir navigation menüsü bulunmaktadır.
- Menüde, "Ürünler" ve "Sepet" sayfalarına yönlendiren linkler bulunmaktadır.

    
  
# Kurulum ve Başlangıç
 
Bu projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

## Depoyu Klonlayın
```bash 
  git clone https://github.com/kullaniciadi/Book-Store.git

```


## Gerekli Bağımlılıkları Yükleyin
Proje dizinine girdikten sonra, gerekli bağımlılıkları yüklemek için aşağıdaki komutu çalıştırın:
```bash 
cd Book-Store
npm install
```

## Uygulamayı Çalıştırın
Uygulamayı yerel ortamınızda başlatmak için şu komutu çalıştırın:

```bash 
npm run dev
```

Tarayıcınızda http://localhost:3000 adresine giderek uygulamayı görüntüleyebilirsiniz.

    
## Katkıda Bulunma
Eğer bu projeye katkıda bulunmak isterseniz, aşağıdaki adımları takip edebilirsiniz:

-  Bu projeyi fork'layın.
-  Yeni bir feature branch oluşturun.
-  Yaptığınız değişiklikleri commit'leyin ve branch'ı push'layın.
-  Pull request oluşturun.
  
## Yazarlar ve Teşekkür

- [@mustafa-bircan](https://github.com/mustafa-bircan) tasarım ve geliştirme için.

  