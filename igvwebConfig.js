var igvwebConfig = {

    genomes: "resources/genomes.json",
    trackRegistryFile: "resources/tracks/trackRegistry.json",

    // Supply a drobpox api key to enable the Dropbox file picker in the load menus.  This is optional
    //dropboxAPIKey: "...",

    // Supply a Google client id to enable the Google file picker in the load menus.  This is optional
    //clientId: "...",
    //apiKey: "...",

    // Provide a URL shorterner function or object.   This is optional.  If not supplied
    // sharable URLs will not be shortened.  If using tinyURL supply an api token
    // urlShortener: {
    //     provider: "tinyURL",
    //     api_token: "<your tinyurl token>"
    // },
    // urlShortener: function(longURL) {...   return shortendURL}

    enableCircularView: true,

    restoreLastGenome: true,

    igvConfig:
        {
            genome: {
                id: "patients",
                name: "Patients",
                fastaURL: "patients.fasta",
                indexURL: "patients.fasta.fai"
            },
            locus: "all",
            queryParametersSupported: true,
            showChromosomeWidget: true,
            showSVGButton: false,
            tracks: []
        }

}
