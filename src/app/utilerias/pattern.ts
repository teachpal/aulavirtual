export class Pattern{
    public rfc = "^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$";
    public codigoPostal = "^[0-9]{5}$";
    public alfaNumerico256 = "^[a-z A-Z 0-9_-]{1,256}$";
    public alfaNumerico128 = "^[a-z A-Z 0-9_-]{1,128}$";
    public alfaNumerico64 = "^[a-z A-Z 0-9_-]{1,64}$";
    public alfaNumerico32 = "^[a-z A-Z 0-9_-]{1,32}$";
    public alfa256 = "^[a-z A-ZäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙÑñ]{1,256}$";
    public alfa128 = "^[a-z A-ZäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙÑñ]{1,128}$";
    public alfa64 = "^[a-z A-ZäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙÑñ]{1,64}$";
    public alfa32 = "^[a-z A-ZäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙÑñ]{1,32}$";
}