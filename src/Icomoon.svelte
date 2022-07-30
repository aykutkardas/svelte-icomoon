<script>
  export let iconSet;
  export let name;
  export let title;
  export let color;
  export let size = 16;
  export let disableFill = false;
  export let removeInitialStyle = false;
  export let style = {};

	import toInlineStyle from './toInlineStyle';
	
	const initialStyle = {
		display: "inline-block",
		stroke: "currentColor",
		fill: "currentColor",
	};
	
	const currentIcon = iconSet.icons.find(
		(item) => item.properties.name === name
	);

	const { width = "1024" } = currentIcon?.icon || {};
	const viewBox = `0 0 ${width} 1024`;
	
	const _style = {
		...(removeInitialStyle ? {} : initialStyle),
		...style,
	}

	if (size) {
		_style.width = size;
		_style.height = size;
	}

	if (color) {
		_style.color = color;
	}

	const paths = currentIcon?.icon.paths.map((path, index) => {
		const pathProps = {
			d: path,
			...(!disableFill ? currentIcon?.icon.attrs[index] : {}),
		};
		return pathProps;
	}) || [];
	
</script>

<svg viewBox={viewBox} style={toInlineStyle(_style)}>
	{#each paths as path}
		<path d={path.d} />
	{/each}
	{#if title}
		<title>{title}</title>
	{/if}
</svg>