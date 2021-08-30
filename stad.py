import random


end = ["svärd", "stad", "borg", "ö", "gårda", "hult", "löv", "by", "skog", "krona", "bo", "mo", "ro", "köping", "berg", "hammar", "sala", "holm", "dal", "strand", "löv", "sund", "ström", "fors", "fjäll", "torp", "berg", "ås", "älv", "ed", "bruk", "hult", "krona", "hamn", "a", "bro", "sjö", "fästning","borg", "sänka"]
first = ["Nord", "Söder", "Väst", "Öst", "Ny", "Gammel", "Lax", "Ek", "Black", "Stål", "Får", "Uggle", "Fager", "Strid", "Stor", "Lill", "Asp", "Stoft", "Kol", "Kyrk", "Ler", "Ört", "Brunn", "Muller", "Silver", "Silver", "Stock", "Salt", "Eld", "Svett", "Varm", "Kall", "Flamm", "Nät", "Fångst", "Land", "Kunskap", "Bok", "Koppar", "Järn", "Bly", "Guld", "Silver", "Brons", "Kvarts", "Malm", "Zink", "Bly", "Sten", "Kristall", "Ljus", "Mörker", "Älv", "Dvärg", "Hem", "Munter", "Glad", "Gran", "Tall" , "Kott", "Knott", "Vide", "Ljung", "Sipp", "Sjö", "Lugn", "Stjärna","Kram","Bord","Lejon","Tiger","Ö", "Måne", "Örn", "Drak", "Liv", "Svärd", "Yx", "Hammar", "Spjut", "Båg", "Spir", "Stav", "Sköld", "Borg", "Slott", "Tomt", "Vätt", "Orch", "Alv", "Troll", "Jätt", "Avian", "Halvling", "Människo", "Tifling", "Ande", "Brutal", "Dra", "Flykt", "Döden", "Ensam", "Flink", "Gift", "Handel", "Helig", "Himel", "Hård", "Mjuk", "Dimm", "Jakt", "Kraft", "Lust", "Lycko", "Lång", "Kort", "Lätt", "Mur", "Björn", "Älg", "Bränn", "Hund", "Gast", "Grotesk", "Grott", "Vit", "Svart", "Blå", "Gul", "Röd", "Grön", "Hopp", "Tro", "Kärlek", "Vika", "Vilja", "Strid", "Lind", "Höst", "Vinter", "Sommar", "Vår", "Natt", "Dag", "Måne", "Sol", "Uggla", "Varg", "Rått", "Varulv", "Vätt", "Ödle", "Ko", "Bond", "Flyg", "Lås", "Nyckel", "Skatt", "Jord", "Åker", "Mul", "Padd", "Katt", "Blom", "Frö"]



for i in range (10):
	print (random.choice(first)+random.choice(end))