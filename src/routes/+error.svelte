<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths'; // AJOUTEZ CETTE LIGNE
    import p404 from '../img/erreur404remi.png';

	// Récupère les informations d'erreur
	$: status = $page.status;
	$: message = $page.error?.message || 'Une erreur est survenue';

	function goHome() {
		goto(`${base}/`); // MODIFIEZ CETTE LIGNE
	}
</script>

<svelte:head>
	<title>{status} - Erreur</title>
</svelte:head>

<div class="error-container">
	<div class="error-content">
		
		{#if status === 404}
            <div class="inerieur404">  
                <img src={p404} class="Chat qui indique 404" alt="Chat qui indique erreur 404">
                <div class="interieur404para">
                    <h3>La page que vous demandez est introuvable</h3>
                    <p>Désolé, il est possible que la page recherchée ait été supprimée, que son nom ait changé ou qu'elle ne soit pas disponible pour le moment.</p>
                </div>
            </div>
        {:else if status === 500}
        <h1 class="error-code">{status}</h1>
			<h2>Erreur serveur</h2>
			<p>Une erreur interne s'est produite. Veuillez réessayer plus tard.</p>
		{:else}
			<h2>Erreur {status}</h2>
			<p>{message}</p>
		{/if}

		<div class="actions">
			<button on:click={goHome} class="btn-primary">
				Retour à l'accueil
			</button>
			<button on:click={() => history.back()} class="btn-secondary">
				Page précédente
			</button>
		</div>
	</div>
</div>

<style>
	.error-container {
		min-height: 80vh;
        font-family: 'League Spartan', sans-serif;
        width: 100%;
        background: #ffbb9075;
	}

	.error-content {
        display: flex;
        flex-direction: column;
		align-items: flex-end;
		justify-content: center;
		color: black;
		text-align: flex-end;
        margin-right: 2rem;
        padding: 1rem;
	}

    .inerieur404{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        align-content: flex-start;
    }
    .inerieur404 img{
        width: 35%;
    }

    .interieur404para h3{
        font-size: 4rem;
        margin-bottom: -1px;
    }

    .interieur404para p{
        font-size: 1.2rem;
    }

    .interieur404para{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        width: 40%;
    }

	.btn-primary, .btn-secondary {
		padding: 1rem 2rem;
		border: none;
		border-radius: 50px;
		font-size: 1.1rem;
		cursor: pointer;
		transition: all 0.3s ease;
		text-decoration: none;
		display: inline-block;
		font-weight: 600;
	}

	.btn-primary {
		background: rgba(251, 7, 7, 0.67);
		color: black;
		border: 2px solid rgba(0, 0, 0, 0.3);
	}

	.btn-primary:hover {
		background: rgba(255, 255, 255, 0.3);
		transform: translateY(-2px);
	}

	.btn-secondary {
		background: transparent;
		color: black;
		border: 2px solid rgba(0, 0, 0, 0.5);
	}

	.btn-secondary:hover {
		background: rgba(255, 255, 255, 0.1);
		transform: translateY(-2px);
	}

	@media (max-width: 768px) {
		.error-code {
			font-size: 6rem;
		}

		h2 {
			font-size: 2rem;
		}

		p {
			font-size: 1.1rem;
		}

		.actions {
			flex-direction: column;
			align-items: center;
		}

		.btn-primary, .btn-secondary {
			width: 100%;
			max-width: 250px;
		}
	}
</style>