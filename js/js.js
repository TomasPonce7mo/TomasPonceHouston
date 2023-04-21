function Houston(n){
    let a = "", b = "", c = "", s = 0;
    for(let i=0;i<n;i++){
        a += (Math.round(Math.random() * 100)) + " ";
        b += (Math.round(Math.random() * 100)) + " ";
    }
    a = a.substring(0, a.length - 1);
    b = b.substring(0, b.length - 1);
    a = a.split(" ");
    b = b.split(" ");
    for(let i=0;i<n;i++){
        c += (parseInt(a[i]) * parseInt(b[i])) + " ";
    }
    c = c.substring(0, c.length - 1);
    c = c.split(" ");
    for(let i=0;i<n;i++){
        s += parseInt(c[i]);
    }
    let ar = [a.join(" "), b.join(" "), c.join(" "), s];
    return ar;
}