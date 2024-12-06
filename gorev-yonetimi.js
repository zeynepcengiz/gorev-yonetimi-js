let gorevyonetimi ={
    gorev : [],
    ekle : function (baslik){
        let id = this.gorev.length + 1;
        this.gorev.push({id: id, baslik:baslik, tamamlandı: false});
        console.log(baslik + " eklendi.")
    },
    listele : function (){
        console.log("Görev");
        for (let i =0; i< this.gorev.length; i++){
            let gorevle = this.gorev[i];
            console.log("ID" + this.gorev.id +
                "Başlık" + this.gorev.baslik +
                "Durum" + this.gorev.tamamlandı
            )
        }
    },
    tamamla : function(id){
        for (i = 0 ; i<this.gorev.length;i++){
            if (this.gorev[i] === id){
                this.gorev[i].tamamlandı = true
                console.log(this.gorev[i].baslik + " başarıyla tamamlandı.");
                break
            }
        }
    },
    sil: function(id){
        for (let i = 0 ; i<this.gorev.length;i++){
            if (this.gorev[i] === id){
                this.gorev[i].tamamlandı = true
                console.log("başarı ile silindi."+ this.gorev[i].baslik);
                this.gorev.splice(i,1);
                break
            }
        }
    }
    
}

gorevyonetimi.ekle("login page");
gorevyonetimi.ekle("image optimizasyonu");
gorevyonetimi.listele();
gorevyonetimi.tamamla(1);
gorevyonetimi.sil(2);
gorevyonetimi.listele()
