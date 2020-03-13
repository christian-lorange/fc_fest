clear all

data=readtable('bands.xlsx');

%% Show Table

s1="<tr class=@content show-"
s1b="@><td class=@sortnr@ style=@display:none;@>";                                     %ID
s2="</td><td class=@tpl@>";                                                                             %Day
s3="</td><td class=@tpr@ style=@display:none;@>";                                                       %Start Time
s3b="</td><td class=@tpr@>";                                                                            %Full time
s4="</td><td class=@tpr@>";                                                                             %Style
s5=" </td><td class=@middlerow@><button onclick=@openModal();currentSlide(";                            %ID
s6=")@>"                                                                                                %Artist
s7="</button></td><td class=@bottomrow@><button onclick=@openModal();currentSlide(";                    %Venue ID
s8=")@>";                                                                                               %Venue
s9="</button></td><td class=@heart@><a href=@#favorites@ onclick=@my_favs_star()@>&#x2605;</a></td></tr>";


complete=[];



for i=1:height(data)
    
    artist=strcat(s1,num2str(table2array(data(i,1))),' hide-',num2str(table2array(data(i,18))),s1b,num2str(table2array(data(i,1))),s2,char(table2array(data(i,2))),s3,char(table2array(data(i,3))),s3b,char(table2array(data(i,5))),s4,char(table2array(data(i,11))),s5,num2str(table2array(data(i,1))),s6,char(table2array(data(i,9))),s7,num2str(table2array(data(i,17))),s8,char(table2array(data(i,6))),s9);
    
    complete=[complete;artist];
    
end

filePh = fopen('bands.txt','w');
fprintf(filePh,'%s\n',complete{:});
fclose(filePh);

fid = fopen('bands.txt','rt') ;
X = fread(fid) ;
fclose(fid) ;
delete bands.txt
X = char(X.') ;
% replace string S1 with string S2
Y = strrep(X, '@', '"') ;
filePh = fopen('bands.txt','w');
fprintf(filePh,'%s\n',Y);
fclose(filePh);


%% Hide Blank Shows

hide=[];
s1='.show-'; %Add show ID
s2=',';
s3='{display:none;}';

for i=1:height(data)
   
    if (table2array(data(i,18)))==0
    
    active=strcat(s1,num2str(table2array(data(i,1))),s2);
    hide=[hide active];
    end
    
end

hide = hide(1:end-1);

hide=[hide s3];

filePh = fopen('hide.txt','w');
fprintf(filePh,'%s\n',hide());
fclose(filePh);



system('type style.txt hide.txt >www/css/common.css');

%% Artist Details

s1="<div class=@mySlides@><h2 class=@artist@>"; %artist
s2="</h2><h3 class=@artist@>";                  %Style
s3="</h3><p class=@artist@>";                   %Bio
s4="<div class=@artist_img_div@><img data-src=@";    %image
s5="@ alt=@web logo@ class=@artist_img@ width=@200@></div><img><div class=@artist@><a href=@"; %music player
s6="@ target=@_blank@ ><img data-src=@img/listen.png@class=@link_img@></a></div><h3 class=@artist@ style=@font-size:0.95em;@>Learn More About the Artist</h3><div class=@artist@><a href=@"; %facebook
s7="@ target=@_blank@ title=@@><img data-src=@img/facebook.png@ alt=@facebook logo@ class=@link_img@></a></div><div class=@artist@><a href=@";   %website
s8="@ target=@_blank@ title=@@><img data-src=@img/web.png@ alt=@web logo@ class=@link_img@></a></div></div>";

modal=[];



for i=1:height(data)
    
    page=strcat(s1,char(table2array(data(i,9))),s2,char(table2array(data(i,11))),s3,char(table2array(data(i,12))),s4,char(table2array(data(i,13))),s5,char(table2array(data(i,14))),s6,char(table2array(data(i,16))),s7,char(table2array(data(i,15))),s8);
    
    
    modal=[modal;page];
    
end

filePh = fopen('artists.txt','w');
fprintf(filePh,'%s\n',modal{:});
fclose(filePh);

fid = fopen('artists.txt','rt') ;
X = fread(fid) ;
fclose(fid) ;
delete artists.txt
X = char(X.') ;
% replace string S1 with string S2
Y = strrep(X, '@', '"') ;
filePh = fopen('artists.txt','w');
fprintf(filePh,'%s\n',Y);
fclose(filePh);

%% Venue Details

v=readtable('venues2.xlsx');

s1="<div class=@mySlides@><h2 class=@artist@>"; %Venue
s2="</h2><h3 class=@artist@>";                   %Address
s3="</h3><p class=@artist@><img data-src=@";          %logo
s4="@ alt=@FocoBanner@ style=@width: 100%;@></p><p style=@font-size:1.8em;@>";
s5="</p><p>Head over to the map page to get more details on where to find this venue.</p></div>";

venue=[];

for i=1:height(v)
    
    page=strcat(s1,char(table2array(v(i,1))),s2,char(table2array(v(i,6))),s3,char(table2array(v(i,4))),s4,char(table2array(v(i,5))),s5);
    
    
    venue=[venue;page];
end

filePh = fopen('venues.txt','w');
fprintf(filePh,'%s\n',venue{:});
fclose(filePh);

fid = fopen('venues.txt','rt') ;
X = fread(fid) ;
fclose(fid) ;
delete venues.txt
X = char(X.') ;
% replace string S1 with string S2
Y = strrep(X, '@', '"') ;
filePh = fopen('venues.txt','w');
fprintf(filePh,'%s\n',Y);
fclose(filePh);


system('type text1.txt bands.txt text2.txt artists.txt venues.txt text3.txt >www/index.html');
