import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/personnelmanagement',
  name: 'personnel-management',
  meta,
  redirect: { name: 'unit-list' },
  component: layoutHeaderAside,
  children: [
    { path: 'unitlist', name: 'unit-list', component: _import('PersonnelManagement/UnitList'), meta: { ...meta, title: '单位列表' } },
    { path: 'joblist', name: 'job-list', component: _import('PersonnelManagement/JobList'), meta: { ...meta, title: '职务列表' } },
    { path: 'departmentlist', name: 'department-list', component: _import('PersonnelManagement/DepartmentList'), meta: { ...meta, title: '部门列表' } },
  ]
}
