//  --------------------------------
//  ---- Renderowanie warunkowe ----
//  --------------------------------
// W React.js możesz pokazywać różne komponenty w zależności od naszych potrzeb. W jednym komponencie możemy użyć wielu różnych.
// Przykładem może być użycie spinnera w czasie ładowania danych.

if (isLoading) {
	return <Loader />;
}
return (
	<div>
		<h1>Hello World</h1>
		<Komponent />
	</div>
);
