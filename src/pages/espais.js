import React from 'react'
import Link from 'gatsby-link'

import {
  Section,
  Box,
  Tag,
  Columns,
  Column,
  Content,
  Title,
  Button,
} from 'bloomer'

import Pageheader from '../components/Pageheader'
import MapContainer from '../components/MapContainer'

const MapPage = ({ data }) => (
  <div>
    <Pageheader
      title="Espais"
      subtitle="Descobreix els espais de l'Esplaiada"
    />
    <Section>
      {data.allContentfulEspais.edges.map(({ node }, i) => (
        <Box key={node.id}>
          <Columns isMobile>
            <Column isSize="12">
              <Title isSize="5">{node.nom}</Title>
            </Column>
          </Columns>
          <Columns isMobile isVCentered>
            <Column isSize="3/4">
              <p>Que hi farem?</p>
              {node.categoriaEspai.map((category, i) => (
                <Tag key={category.id} isColor={category.color}>
                  {category.titol}
                </Tag>
              ))}
            </Column>
            <Column>
              <Link to={node.slug}>
                <Button isColor="primary" isOutlined>
                  +Info
                </Button>
              </Link>
            </Column>
          </Columns>
        </Box>
      ))}
    </Section>
  </div>
)

export default MapPage

export const query = graphql`
  query AllotjamentListQuery {
    allContentfulEspais(sort: { fields: [nom], order: ASC }) {
      edges {
        node {
          nom
          slug
          categoriaEspai {
            id
            titol
            color
          }
        }
      }
    }
  }
`
