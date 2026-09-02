<script>
    import bannière from "../../../../img/Bannière.png";
    import cartedumonde from "../../../../img/carte-du-monde.png";
    import LogoManon from "../../../../img/design/logo_manon.png";
    import LogoCabinetavocat from "../../../../img/design/cabinetavocat.png";

    import "../.././design.css";
    import { base } from "$app/paths";

    const images = [
        {
            id: 1,
            url: LogoManon,
            alt: "Logo de l’avocate Maitre Manon FONTAINE",
            title: "Logo de l’avocate Maitre Manon FONTAINE",
        },
        {
            id: 2,
            url: LogoCabinetavocat,
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
                    Logo de l’avocate Maitre Manon FONTAINE
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
                    <strong
                        >Identité visuelle « MF » – Projet de logo pour l'avocate Maitre Manon FONTAINE</strong
                    >
                </p>

                <p>
                    Logo réalisé pour une future avocate souhaitant disposer
                    d’une identité visuelle sobre, professionnelle et facilement
                    reconnaissable. Le projet repose sur la création d’un
                    monogramme à partir des initiales « M » et « F », pensées
                    comme un signe graphique unique plutôt que comme deux
                    lettres séparées.
                </p>

                <p>
                    <strong>Le concept :</strong><br />
                    L’idée principale était de fusionner les lettres « M » et « F
                    » afin de créer un logo compact, mémorisable et adaptable à différents
                    supports de communication. L’association des deux initiales permet
                    de personnaliser l’identité de la future avocate tout en conservant
                    un rendu suffisamment sobre pour correspondre au domaine juridique.
                </p>

                <p>
                    <strong>La construction du monogramme :</strong><br />
                    Les lettres ont été rapprochées et imbriquées pour former une
                    composition cohérente. Le « M » apporte une structure stable
                    et une base visuelle forte, tandis que le « F » vient compléter
                    l’ensemble avec des lignes plus affirmées. Cette fusion permet
                    de créer un symbole qui peut être lu comme des initiales, mais
                    aussi reconnu comme une forme graphique autonome.
                </p>

                <p>
                    <strong>L’équilibre entre rigueur et proximité :</strong><br
                    />
                    Le domaine du droit demande une communication claire, crédible
                    et rassurante. Le logo a donc été pensé avec des formes simples
                    et une construction équilibrée afin d’évoquer la précision, la
                    rigueur et la confiance. En évitant les détails inutiles, le
                    monogramme conserve une bonne lisibilité, même à petite échelle.
                </p>

                <p>
                    La proximité entre les lettres symbolise également
                    l’accompagnement et la relation de confiance qu’une avocate
                    peut construire avec ses clients. Le résultat cherche ainsi
                    à éviter une identité trop froide ou trop institutionnelle,
                    tout en gardant une apparence sérieuse et élégante.
                </p>

                <p>
                    <strong>Les usages envisagés :</strong><br />
                    Grâce à sa forme compacte, le monogramme « MF » peut être utilisé
                    seul comme signature visuelle ou associé au nom complet et à
                    la mention « Avocate ». Il est pensé pour fonctionner sur de
                    nombreux supports : cartes de visite, papier à en-tête, dossiers,
                    signature d’e-mail, réseaux sociaux, site internet ou encore
                    documents juridiques.
                </p>

                <p>
                    <strong>L’intention :</strong><br />
                    À travers ce logo, j’ai cherché à concevoir une identité personnelle
                    et contemporaine, adaptée aux exigences d’une profession juridique.
                    La fusion des initiales permet de créer un signe distinctif qui
                    représente directement la personne, tout en transmettant des
                    valeurs de sérieux, de stabilité et de confiance.
                </p>

                <p>
                    <strong>Conclusion :</strong><br />
                    Ce projet illustre ma démarche de création d’identité visuelle
                    : partir d’éléments simples, ici deux initiales, puis les transformer
                    en un symbole unique et cohérent. Le logo « MF » propose une
                    solution graphique sobre, professionnelle et durable, conçue
                    pour accompagner une future avocate dans le développement de
                    son image.
                </p>
            </div>
        </div>
    </div>
</div>
