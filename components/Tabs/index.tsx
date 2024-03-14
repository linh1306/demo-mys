interface ITabsProps {
  tabActive: string,
  items: ITab[]
}

interface ITab {
  label: string,
  children: JSX.Element | string
}

export function Tabs(props: ITabsProps): JSX.Element {
  const { tabActive, items } = props
  
  let tab = items[0].children
  items.map(item => {
    if (item.label === tabActive) {
      tab = item.children
    }
  })

  if (typeof tab === 'string') {
    return (
      <p>tab</p>
    )
  }

  return tab
}