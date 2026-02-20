import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { fetchGlobalAllData } from '@/lib/db/SiteDataApi'
import { DynamicLayout } from '@/themes/theme'

/**
 * 404
 * @param {*} props
 * @returns
 */
const NoFound = props => {
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='Layout404' {...props} />
}

export async function getStaticProps(req) {
  const { locale } = req

  const props = (await fetchGlobalAllData({ from: '404', locale })) || {}

  // 404页面只需要站点信息，清理其他不必要的数据
  delete props.allPages
  delete props.allNavPages
  delete props.latestPosts
  delete props.customNav
  delete props.customMenu
  delete props.categoryOptions
  delete props.tagOptions
  delete props.collection
  delete props.collectionQuery
  delete props.collectionId
  delete props.collectionView
  delete props.block
  delete props.schema
  delete props.rawMetadata
  delete props.pageIds
  delete props.viewIds
  delete props.notice

  return { props }
}

export default NoFound
