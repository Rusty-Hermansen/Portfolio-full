export default function peer (name, ip, allowed_range, publicKey, privateKey, date){
    this.name=name
    this.id = ip
    this.allowed_range=allowed_range || '0.0.0.0/0'
    this.publicKey = publicKey || ''
    this.privateKey=privateKey || ''
    this.date=date || new Date().toISOString(),slice(0,10)
}