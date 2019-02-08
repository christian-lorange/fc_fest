clear all

data=readtable('upload.xlsx');

s1="<tr class=@content@ ><td class=@sortnr@ style=@display:none;@>";
s2="</td><td class=@tpl@>";
s3="</td><td class=@tpr@>";
s4="</td><td class=@tpr@>";
s5="</td><td class=@middlerow@><button onclick=@openModal();currentSlide(";
s6=")@>"
s7="</button></td><td class=@bottomrow@>";
s8="</td><td class=@heart@><a href=@#favorites@>&#9829;</a></td><tr>";


complete=[];

for i=1:height(data)
    
    artist=strcat(s1,num2str(table2array(data(i,1))),s2,char(table2array(data(i,3))),s3,char(table2array(data(i,6))),s4,char(table2array(data(i,7))),s5,num2str(table2array(data(i,1))),s6,char(table2array(data(i,4))),s7,char(table2array(data(i,2))),s8);
    
    complete=[complete;artist];
    
end


s1="<div class=@mySlides@><h2 class=@artist@>";
s2="</h2><h3 class=@artist@>";
s3="</h3><p class=@artist@>";
s4="</p><div class=@artist@>";
s5="</div><div class=@artist@>";
s6="</div></div>";

modal=[];

for i=1:height(data)
    
    page=strcat(s1,char(table2array(data(i,4))),s2,char(table2array(data(i,7))),s3,char(table2array(data(i,11))),s4,char(table2array(data(i,10))),s5,char(table2array(data(i,9))),s6);
    
    
    modal=[modal;page];
    
end


v=readtable('venues.xlsx');

s1=" <div class=@mySlides@><h2 class=@artist@>";
s2="</h2><h3 class=@artist@>";
s3="</h3><p class=@artist@><img src=@";
s4="@ alt=@FocoBanner@ style=@width: 100%;@></p><div class=@artist@><a href=@";
s5="@ target=@_blank@ title=@Directions@>Live Map</a></div></div>";

venue=[];

for i=1:height(v)
    
    page=strcat(s1,char(table2array(v(i,2))),s2,char(table2array(v(i,3))),s3,char(table2array(v(i,4))),s4,char(table2array(v(i,5))),s5);
    
    
    venue=[venue;page];
end