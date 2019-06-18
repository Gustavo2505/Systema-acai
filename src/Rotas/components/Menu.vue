<template>
<v-layout justify-center>
    <v-flex xs12 sm6>
  <v-card>
        <v-container
       
          fluid
          grid-list-md
        >
          <v-layout row wrap  class="panel">
            <v-flex
              v-for="card in cards"
              :key="card.title"
              v-bind="{ [`xs${card.flex}`]: true }"
            >
              <v-card 
           
              >
                
                <v-img
                  :src="card.src"
                  height="200px"
            
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                    padding 
                    
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="texto" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-actions>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
         <v-btn to="/">VOLTAR / TESTE</v-btn>
    </v-flex>
   
  </v-layout>

  
</template>

<script>
import { VOverflowBtn } from 'vuetify/lib';
  export default {
    data: () => ({
      cards: [
        { title: 'Cardápio', src: 'https://image.flaticon.com/icons/svg/1878/1878164.svg', flex: 6,  },
        { title: 'Pedidos', src: ' https://image.flaticon.com/icons/svg/1876/1876611.svg', flex: 6 },
        { title: 'Status de Pedidos', src: 'https://image.flaticon.com/icons/svg/1876/1876604.svg', flex: 6 },
          { title: 'Administrativo', src: 'https://image.flaticon.com/icons/svg/1876/1876592.svg', flex: 6 },
          { title: 'Clientes', src: 'https://image.flaticon.com/icons/svg/1402/1402121.svg ', flex: 6 },
          { title: 'Editar Cardápio', src: ' https://image.flaticon.com/icons/svg/1875/1875043.svg ', flex: 6 }
      ]
    })
  }
 
  
</script>

<style>
.panel {

     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  }
  
   

</style>

