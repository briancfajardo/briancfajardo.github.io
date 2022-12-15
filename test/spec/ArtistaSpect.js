describe('Artista', function(){
    it('Should be able to get the artist name', function(){
        var artista = new Artista();
        artista.cambiarNombreArtista('Brian Camilo');

        expect(artista.getNombreArtista()).toBe('Brian Camilo');
    });

    it('Should be able to change the artist name', function(){
        var artista = new Artista();
        artista.cambiarNombreArtista('Brian Camilo');

        artista.cambiarNombreArtista('Camilo Fajardo');

        expect(artista.getNombreArtista()).toBe('Camilo Fajardo');
    });

    it('Should be able to add an image to the artist', function(){
        var artista = new Artista();
        
        artista.añadirImg('Ojo Al oleo', '../imgArte/CamiloFajardo/ojoBrianCamiloFajardo.jpeg','Ojo Camilo Fajardo');
        
        expect(artista.obtenerNombreImg(0)).toBe('Ojo Al oleo');
        expect(artista.obtenetURLDescipcion(0)[0]).toBe('../imgArte/CamiloFajardo/ojoBrianCamiloFajardo.jpeg');
        expect(artista.obtenetURLDescipcion(0)[1]).toBe('Ojo Camilo Fajardo');
    });

    it('Should be able to get the number of images of the artist', function(){
        var artista = new Artista();
        
        artista.añadirImg('Ojo Al oleo', '../imgArte/CamiloFajardo/ojoBrianCamiloFajardo.jpeg','Ojo Camilo Fajardo');
        
        expect(artista.obtenerNumeroImagenes()).toBe(1);
        
    });

})