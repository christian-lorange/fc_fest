load('files.mat');
e=[];
for i=1:length(files)
    try
   url_img =char(files(i));
   name=char(files(i));
   name=name(81:end);
   urlwrite(url_img, name);
    catch
       e=[1;i];
    end
end