import CMS from 'netlify-cms'

import LandingPagePreview from './preview-templates/LandingPagePreview'
import HomePagePreview from './preview-templates/HomePagePreview'
import InformationPagePreview from './preview-templates/InformationPagePreview'
import WorshipPagePreivew from './preview-templates/WorshipPagePreview'
import DepartmentPagePreview from './preview-templates/DepartmentPagePreview'
import DisciplinePagePreview from './preview-templates/DisciplinePagePreview'
import MissionPagePreview from './preview-templates/MissionPagePreview'
import CommunityPagePreview from './preview-templates/CommunityPagePreview'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import NoticePostPreview from './preview-templates/NoticePostPreview'
import SundayPraisePostPreview from './preview-templates/SundayPraisePostPreview'
import SundaySermonPostPreview from './preview-templates/SundaySermonPostPreview'
import FamilyWorshipPostPreview from './preview-templates/FamilyWorshipPostPreview'
import ImageGalleryPostPreview from './preview-templates/ImageGalleryPostPreview'

CMS.registerPreviewTemplate('landing', LandingPagePreview)
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('information', InformationPagePreview)
CMS.registerPreviewTemplate('worship', WorshipPagePreivew)
CMS.registerPreviewTemplate('department', DepartmentPagePreview)
CMS.registerPreviewTemplate('discipline', DisciplinePagePreview)
CMS.registerPreviewTemplate('mission', MissionPagePreview)
CMS.registerPreviewTemplate('community', CommunityPagePreview)

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('notice', NoticePostPreview)
CMS.registerPreviewTemplate('sunday-praise', SundayPraisePostPreview)
CMS.registerPreviewTemplate('sunday-sermon', SundaySermonPostPreview)
CMS.registerPreviewTemplate('family-worship', FamilyWorshipPostPreview)
CMS.registerPreviewTemplate('image-gallery', ImageGalleryPostPreview)
