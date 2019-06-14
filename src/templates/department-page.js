import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
// import styled from 'styled-components'
import Layout from '../components/Layout'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { MainTitle, Divider, MainDescription } from '../components/style';

export const DepartmentPageTemplate = ({ title }) => {

  return (
    <div>
        <Grid fluid style={{backgroundColor: "rgba(230, 202, 144, 0.5)"}}>
          <Row>
            <Col sm={1}></Col>
            <Col sm={10}>
                <MainTitle color="#DFAC44">{title}</MainTitle>
                <Divider background="#ABC8BE" style={{marginTop: "2rem"}}></Divider>
                <Row>
                  <Col md={6}>
                    <MainDescription color="#707070">
                      저희 교회는 1973년에 장영춘 원로목사께서 개척하여 '사도행전의 역사를 재현하는 교회'를 모토로 40년을 은혜 가운데 달려 왔습니다.
                      그 목회철학을 계승하여 2013년에 영광스런 3기사역의 항해를 시작하게 되었습니다. 
                      주님이 원하시는 바로 그 교회의 핵심은 한 영혼을 소중히 여기시는 주님의 마음을 잊지 않는 것입니다.
                      시간이 흘러도 본질을 놓치지 않는 교회, 역사가 깊어져도 본질이 변하지 않는 교회, 주님이 이 땅에 다시 오시는 날까지 주의 심장이 살아 숨시는 교회가 되길 소망합니다.

                      Test
                    </MainDescription>
                  </Col>
                </Row>
            </Col>
            <Col sm={1}></Col>
          </Row>
        </Grid>
    </div>    
  )
}

DepartmentPageTemplate.propTypes = {
  title: PropTypes.string.isRequired
}

const DepartmentPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <DepartmentPageTemplate
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

DepartmentPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default DepartmentPage

export const departmentPageQuery = graphql`
  query DepartmentPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
