import r from"./weather-api.js";import t from"./three-days-forecast.js";const n=document.querySelector(".first-card"),o=document.querySelector(".second-card"),c=document.querySelector(".third-card"),d=document.querySelector(".forth-card"),i=document.querySelector(".fifth-card"),s=document.querySelector(".sixth-card"),e=new r,a=new t(n,e),h=new t(o,e),m=new t(c,e),f=new t(d,e),l=new t(i,e),u=new t(s,e);a.init(3451190),h.init(3450554),m.init(6320062),f.init(3448439),l.init(6322752),u.init(6323121);