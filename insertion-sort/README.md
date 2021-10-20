# insertion-sort

### ```[22,27,16,2,18,6]``` dizisinin ```Insertion Sort``` yöntemi ile sıralanması

I.
1. İlk loop'ta dizinin ilk elemanı "index 0" kendiliğinden sıralı kabul edilerek sıralama işlemine başlanır. Bu gösterimde ```|``` işaretinden öncesi sıralanmış sonrası sıralanmamış olarak değerlendirilmelidir.
    *   [22 ```|``` 27,16,2,18,6] ilk elemanin kendisinden sonra gelen eleman ile karşılaştırılmasında
    *   Eğer 1. eleman ardından gelen elemandan büyük ise bu iki elemanın yeri değiştirilir.
    *   Eğer 1. eleman ardından gelen elemandan küçük veya eşit ise değişiklik olmadan bir sonraki elemandan devam eder.
2. 2. loop'ta, dizinin ikinci elemanı kendisinden önceki elemanlar ile karşılaştırılır.
    *   [22, 27 ```|```16,2,18,6] dizinin 1. loop'tan sonraki durumu
    *   Dizinin 2. elemanı olan 16 kendisinden önceki elemanlar ile karşılaştırılır.
    *   "16" Kendisinden bir önceki indexte bulunan 27 den ve ondan önceki indexte bulunan 22 den küçük olduğu için 27 16'nın bulunduğu indexe, 22 de 27 nin bulunduğu index'e kaydırılıp, 16 aralarında en küçük oldğundan ilk indexe yazılır.
3. 3. loop'ta, dizinin 3. elemanı kendisinden önceki elemanlar ile karşılaştırılır
    * [16,22,27 ```|``` 2,18,6] dizinin ikinci loop'tan sonraki
    * Dizinin 3. elemanı olan 2 kendisinden önceki elemanlar ile karşılaştırıldığında, dizinin sıralanmış olan bölümünde bulunan tüm elemanlardan küçük olduğu için arkasındaki elemanlar 3. elemanın bulunduğu indexe kaydırılır ve sonuçta 2 ilk indexe yerleşmiş olur.
4. 4. loop'ta, 4. indexte bulunan 18 kendisinden önce bulunan elemanlarla karşılaştırılır.
    * [2,16,22,27 ```|``` 18,6] dizinin 3. loop'tan sonraki durumu.
    * Dizinin 4. elemanı olan 18 kendisinden önceki elemanlala karşılaştırıldığında, 3. indexte bulunan 27 ve 2. indexte bulunan 22 den küçük fakat 1. indexte bulunan 16 dan büyük olduğu için, 27 daha önce 18'in bulunduğu indexe, 22, 27'nin bulunduğu indexe kaydırılır. 18, 16'dan büyük olduğu için daha fazla kaydırma işlemi olmaz ve 18 daha önce 22'nin bulunduğu indexe yerleşmiş olur.
5. 5. loop'ta 5. indexte bulunan 6 kendisinden önceki elemanlar ile karşılaştırılır.
    * [2,16,18,22,27 ```|``` 6] dizinin 4. loop'tan sonraki durumu
    * Dizinin 5. elemanı olan 6 kendisinden önceki elemanlarla karşılaştırılır. Daha önceki aşamalarda olduğu gibi dizide ilk indexte bulunan 2 haric tüm elemanlardan küçük olduğu için önceki adımlardaki kaydırma işlemlerinden sonra 2. indexe yerleşir.
    
    
    [2,6,16,18,22,27] dizinin 5. loop'tan sonraki durumu sıralanmış haldedir.

II.

### Time Complexity

| | Best Case | Worst Case|
|----|:-----:|:-----:|
|Loop Sayısı|O(n)|O(n)|
|Kaydırılan Elemanlar|O(1)|O(n)|
|Toplam|O(n)|O(n^2)

III.
Dizi sıralandıktan sonra 18'in pozisyonu average case olarak değerlendirilebilir

[7,3,5,8,2,9,4,15,6] dizisinin insertion sorttaki ilk 4 adımı:
1. [3,7,5,8,2,9,4,15,6]
2. [3,5,7,8,2,9,4,15,6]
3. [3,5,7,8,2,9,4,15,6]
4. [2,3,5,7,8,9,4,15,6]