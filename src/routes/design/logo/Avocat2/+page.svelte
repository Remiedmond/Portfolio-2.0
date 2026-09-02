<script>
    import bannière from "../../../../img/Bannière.png";
    import cartedumonde from "../../../../img/carte-du-monde.png";
    import LogoAna from "../../../../img/design/logo Ana avocat.png";
    import LogoCabinet from "../../../../img/design/cabinetavocat2.png";

    import "../.././design.css";
    import { base } from "$app/paths";

    const images = [
        {
            id: 1,
            url: LogoAna,
            alt: "Logo de l’avocate Maitre Ana DA COSTA FARIA",
            title: "Logo de l’avocate Maitre Ana DA COSTA FARIA",
        },
        {
            id: 2,
            url: LogoCabinet,
            alt: "Logo du cabinet d’avocats",
            title: "Logo sur un cabinet d’avocats",
        },
    ];

    let selectedImage = images[0];

    function selectImage(image) {
        selectedImage = image;
    }
</script>

<div class="designglobal">
    <img class="banniere" src={bannière} alt="Bannière" />

    <div class="couleurbackroungd">
        <a class="cartedumonderetour" href="{base}/design/logo">Retour</a>

        <div class="gallery-container">
            <div class="gallery-omages">
                <h2 class="gallery-title">
                    Logo de l’avocate Maitre Ana DA COSTA FARIA
                </h2>

                <!-- Image principale -->
                <div class="main-image-container">
                    <div class="main-image-wrapper">
                        <div class="main-image-shadow"></div>
                        <div class="main-image-card">
                            <img
                                src={selectedImage.url}
                                alt={selectedImage.alt}
                                class="main-image"
                            />
                            <div class="image-overlay">
                                {selectedImage.id}/{images.length}
                            </div>
                            <div class="image-caption">
                                {selectedImage.title}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Miniatures -->
                <div class="thumbnails-container">
                    {#each images as image}
                        <button
                            class="thumbnail-wrapper {selectedImage.id ===
                            image.id
                                ? 'active'
                                : ''}"
                            on:click={() => selectImage(image)}
                        >
                            <div class="thumbnail-shadow"></div>
                            <div class="thumbnail-card">
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    class="thumbnail"
                                />
                                {#if selectedImage.id === image.id}
                                    <div class="active-indicator">
                                        <div class="indicator-dot"></div>
                                    </div>
                                {/if}
                            </div>
                        </button>
                    {/each}
                </div>
            </div>
            <div class="gallery-blabla">
                <p>
                    <strong>Identité visuelle pour Ana Da Costa Faria</strong>
                </p>

                <p>
                    Logo réalisé pour Ana Da Costa Faria, future avocate
                    souhaitant développer une identité visuelle personnelle et
                    professionnelle. L’objectif était de concevoir un symbole à
                    la fois sérieux, élégant et facilement identifiable, capable
                    de traduire son domaine d’activité tout en évoquant ses
                    origines portugaises.
                </p>

                <p>
                    <strong>Le concept :</strong><br />
                    Le logo repose sur l’association des lettres « A », « C » et
                    « F », correspondant aux initiales du nom Ana Da Costa Faria.
                    Ces lettres sont fusionnées afin de former un monogramme compact,
                    reconnaissable et adapté à différents supports de communication.
                </p>

                <p>
                    La composition intègre également une référence au blason
                    portugais. La forme extérieure du logo reprend les codes
                    visuels d’un écu, très présents dans l’architecture,
                    l’héraldique et les symboles traditionnels portugais. Ce
                    choix permet de rappeler les origines de la cliente tout en
                    donnant au logo une apparence institutionnelle et
                    intemporelle.
                </p>

                <p>
                    <strong>Tradition et modernité :</strong><br />
                    L’intention était de créer un équilibre entre tradition et modernité.
                    La forme du blason et la construction du monogramme évoquent
                    l’histoire, la stabilité et la légitimité, tandis que la simplification
                    des formes et l’utilisation d’un symbole épuré inscrivent l’identité
                    dans une approche plus contemporaine.
                </p>

                <p>
                    Les lignes droites apportent une impression de précision, de
                    méthode et de rigueur, des qualités essentielles dans le
                    domaine juridique. À l’inverse, les courbes adoucissent
                    l’ensemble et suggèrent la proximité, l’écoute et la
                    souplesse dans l’accompagnement des clients. La combinaison
                    de ces formes permet ainsi d’éviter un rendu trop strict ou
                    trop froid.
                </p>

                <p>
                    <strong>La construction graphique :</strong><br />
                    Le monogramme a été conçu comme un élément central et autonome.
                    Les lettres s’imbriquent à l’intérieur du blason afin de créer
                    une forme équilibrée et facilement mémorisable. La symétrie générale
                    renforce l’idée d’équité, de stabilité et de justice, tandis
                    que l’encadrement blanc permet de détacher clairement le symbole
                    de son arrière-plan.
                </p>

                <p>
                    <strong>Les déclinaisons :</strong><br />
                    Plusieurs variantes colorées ont été étudiées afin d’évaluer
                    les différentes perceptions du logo. Les teintes dorées et cuivrées
                    évoquent l’élégance, la valeur et le caractère institutionnel.
                    Une version monochrome a également été développée pour garantir
                    une utilisation plus flexible sur des documents professionnels,
                    des cartes de visite, des signatures électroniques ou des supports
                    imprimés.
                </p>

                <p>
                    <strong>L’intention :</strong><br />
                    Ce logo cherche à transmettre une image professionnelle, fiable
                    et accessible. Il doit permettre à Ana Da Costa Faria de construire
                    une identité reconnaissable, tout en mettant en valeur son parcours
                    et son héritage culturel. Le blason portugais n’est donc pas
                    utilisé comme une simple décoration : il constitue un élément
                    de sens qui relie l’identité professionnelle à ses origines.
                </p>

                <p>
                    <strong>Conclusion :</strong><br />
                    Ce projet m’a permis de travailler sur la création d’une identité
                    visuelle personnelle dans un secteur où la confiance, la rigueur
                    et la crédibilité sont essentielles. En associant un monogramme
                    contemporain à une forme inspirée de l’héraldique portugaise,
                    j’ai cherché à créer un logo à la fois professionnel, symbolique
                    et intemporel.
                </p>
            </div>
        </div>
    </div>
</div>
