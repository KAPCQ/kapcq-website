import CMS from 'netlify-cms'

import LandingPagePreview from './preview-templates/LandingPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import InformationPagePreview from './preview-templates/InformationPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import NoticePostPreview from './preview-templates/NoticePostPreview'
import SundayPraisePostPreview from './preview-templates/SundayPraisePostPreview'

CMS.registerPreviewTemplate('landing', LandingPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('information', InformationPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('notice', NoticePostPreview)
CMS.registerPreviewTemplate('sunday-praise', SundayPraisePostPreview)
