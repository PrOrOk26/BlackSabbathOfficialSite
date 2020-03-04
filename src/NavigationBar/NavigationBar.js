import createElement from '../shared/components.js';

const NavigationBar = () => {
	const menuElements = [
		{
			name: 'THE BAND',
			subElements: [
				{ name: 'DISCOGRAPHY' },
				{ name: 'HISTORY' },
				{ name: 'AWARDS' }
			]
		},
		{
			name: 'EVENTS',
			subElements: [
				{ name: 'PAST EVENTS' },
				{ name: 'UPCOMING EVENTS' }
			],
		},
		{
			name: 'NEWS',
		},
		{
			name: 'MEDIA',
			subElements: [
				{ name: 'VIDEOS' },
				{ name: 'PHOTOS' },
			]
		},
		{
			name: 'SHOP',
			subElements: [
				{ name: 'US' },
				{ name: 'Canada' },
				{ name: 'Germany' },
				{ name: 'France' },
				{ name: 'ITunes' },
				{ name: 'Rest of the world' },
			]
		}
	];

	return createElement('nav',
		{ class: 'navbar' },
		createElement('a',
			{
				class: 'navbar__close',
				href: '#'
			},
			createElement('span', { innerText: 'Close' })
		),
		createElement('ul',
			{
				class: 'navbar__categories'
			},
			...menuElements.map(elem => {
				return createElement('li',
					{
						class: 'main-category'
					},
					createElement('a',
						{
							class: 'main-category__link',
							href: '#'
						},
						createElement('span',
							{
								innerText: elem.name
							})
					),
					elem.subElements && createElement('ul',
						{
							class: 'subcategories'
						},
						...elem.subElements.map(subcategory => (
							createElement('li',
								{
									class: 'subcategory'
								},
								createElement('a',
									{
										class: 'subcategory__link',
										href: '#'
									},
									createElement('span',
										{
											innerText: subcategory.name
										})
								))
						))
					)
				)
			})
		)
	)
};

export default NavigationBar;