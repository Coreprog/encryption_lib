
export class Caesar{
    private static um = ['Ä','ä','Ö','ö','Ü','ü','ß'];
    private static bum = ['AE','UE','OE','ae','oe','ue'];

    public static CasaerEncoding(text:string,key:number) {
        for (let i = 0; i < this.um.length; i++) {
            if (text.includes(this.um[i])){
                text= text.replace('Ä','AE');
                text=text.replace('ä','ae');
                text=text.replace('Ö','OE');
                text=text.replace('ö','oe');
                text=text.replace('Ü','UE');
                text=text.replace('ü','ue');
                text=text.replace('ß','ss');
            }
        }
        let result = ''
        key = key % 26
        for (let i = 0; i < text.length; i++) {
            if (text[i]==" "){
                result += text[i];
            }else{
            let b = text[i].charCodeAt(0);
            let a = b
            if (b >= 97 && b < 123) {
                a += key
                if (a>122){
                    a = a-122+96
                }
            }
            if (b >= 65 && b < 91) {
                a += key
                if (a>90){
                    a = a-90+64
                }
            }
            result += String.fromCharCode(a);
        }}
        return result
    }


    public static CasaerDecoding(text:string,key:number) {
        let result = ''
        key = key % 26
        for (let i = 0; i < text.length; i++) {
            if (text[i]== " "){
                result += text[i];
            }else{
            let b = text[i].charCodeAt(0);
            let a = b
            if (b >= 97 && b < 123) {
                a -= key
                if (a<97){
                    a = a-97+123
                }
            }
            if (b >= 65 && b < 91) {
                a -= key
                if (a<65){
                    a = a-65+91
                }
            }
            result += String.fromCharCode(a);
        }}
        for (let i = 0; i < this.bum.length; i++) {
            if (result.includes(this.bum[i])){
                result = result.replace('AE','Ä');
                result = result.replace('ae','ä');
                result = result.replace('OE','Ö');
                result = result.replace('oe','ö');
                result = result.replace('UE','Ü');
                result = result.replace('ue','ü');
            }
        }
        return result
    }
    }