<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
  title: 'Choose your MIRTE robot – MIRTE',
  meta: [
    {
      name: 'description',
      content:
        'Compare all MIRTE robots and discover which robot best fits your classroom, project or learning goals.'
    }
  ]
})

const activeTooltip = ref(null)

const robots = [
  {
    id: 'lite',
    price: '€10-€20',
    name: 'MIRTE Lite',
    image: '/images/MIRTE_lite_obstacle_sensor_transparant.png',
    bestFor: 'No programming robotics lessons'
  },
  {
    id: 'basic',
    price: '€25-€40',
    name: 'MIRTE Basic',
    image: '/images/MIRTE_basic_transparant.png',
    bestFor: 'Learning Python & robotics'
  },
  {
    id: 'pioneer',
    price: '€100-€150',
    name: 'MIRTE Pioneer',
    image: '/images/MIRTE_pioneer_transparant.png',
    bestFor: 'AI & autonomy'
  },
  {
    id: 'master',
    price: '€800-€900',
    name: 'MIRTE Master',
    image: '/images/MIRTEMasterCloseUp.png',
    bestFor: 'Advanced robotics'
  }
]

const features = [
  {
    category: t('comparison.categories.programming'),
    rows: [
      {
        name: t('comparison.features.block_programming'),
        tooltip: t('comparison.tooltips.block_programming'),
        values: {
          lite: { status: 'no' },
          basic: { status: 'yes' },
          pioneer: { status: 'yes' },
          master: { status: 'future', tooltip: t('comparison.value_tooltips.future_release') }
        }
      },
      {
        name: t('comparison.features.python_programming'),
        tooltip: t('comparison.tooltips.python_programming'),
        values: {
          lite: { status: 'no' },
          basic: { status: 'yes' },
          pioneer: { status: 'yes' },
          master: { status: 'yes' }
        }
      },
      {
        name: t('comparison.features.cpp_programming'),
        tooltip: t('comparison.tooltips.cpp_programming'),
        values: {
          lite: { status: 'no' },
          basic: { status: 'limited', tooltip: t('comparison.value_tooltips.basic_cpp') },
          pioneer: { status: 'yes' },
          master: { status: 'yes' }
        }
      },
      {
        name: t('comparison.features.linux_ros'),
        tooltip: t('comparison.tooltips.linux_ros'),
        values: {
          lite: { status: 'no' },
          basic: { status: 'no' },
          pioneer: { status: 'yes' },
          master: { status: 'yes' }
        }
      },
      {
        name: t('comparison.features.vscode_integration'),
        tooltip: t('comparison.tooltips.vscode_integration'),
        values: {
          lite: { status: 'no' },
          basic: { status: 'no' },
          pioneer: { status: 'yes' },
          master: { status: 'yes' }
        }
      }
    ]
  },

  {
    category: t('comparison.categories.sensors'),
    rows: [
      {
        name: t('comparison.features.line_following'),
        tooltip: t('comparison.tooltips.line_following'),
        values: {
          lite: { status: 'yes' },
          basic: { status: 'yes' },
          pioneer: { status: 'yes' },
          master: { status: 'no' }
        }
      },
      {
        name: t('comparison.features.ir_obstacle_avoidance'),
        tooltip: t('comparison.tooltips.ir_obstacle_avoidance'),
        values: {
          lite: { status: 'yes' },
          basic: { status: 'yes' },
          pioneer: { status: 'yes' },
          master: { status: 'no' }
        }
      },
      {
        name: t('comparison.features.color_sensing'),
        tooltip: t('comparison.tooltips.color_sensing'),
        values: {
          lite: { status: 'no' },
          basic: { status: 'future', tooltip: t('comparison.value_tooltips.future_release') },
          pioneer: { status: 'yes' },
          master: { status: 'no' }
        }
      },
      {
        name: t('comparison.features.distance_sensing'),
        tooltip: t('comparison.tooltips.distance_sensing'),
        values: {
          lite: { status: 'no' },
          basic: { status: 'yes' },
          pioneer: { status: 'yes' },
          master: { status: 'yes' }
        }
      },
      {
        name: t('comparison.features.imu'),
        tooltip: t('comparison.tooltips.imu'),
        values: {
          lite: { status: 'no' },
          basic: { status: 'future', tooltip: t('comparison.value_tooltips.future_release') },
          pioneer: { status: 'yes' },
          master: { status: 'yes' }
        }
      },
      {
        name: t('comparison.features.camera'),
        tooltip: t('comparison.tooltips.camera'),
        values: {
          lite: { status: 'no' },
          basic: { status: 'no' },
          pioneer: { status: 'yes' },
          master: { status: 'yes' }
        }
      },
      {
        name: t('comparison.features.live_sensor_data'),
        tooltip: t('comparison.tooltips.live_sensor_data'),
        values: {
          lite: { status: 'no' },
          basic: { status: 'no' },
          pioneer: { status: 'yes' },
          master: { status: 'yes' }
        }
      },
      {
        name: t('comparison.features.lidar'),
        tooltip: t('comparison.tooltips.lidar'),
        values: {
          lite: { status: 'no' },
          basic: { status: 'no' },
          pioneer: {
            status: 'limited',
            tooltip: t('comparison.value_tooltips.pioneer_lidar')
          },
          master: { status: 'yes' }
        }
      },
      {
        name: t('comparison.features.depth_camera'),
        tooltip: t('comparison.tooltips.depth_camera'),
        values: {
          lite: { status: 'no' },
          basic: { status: 'no' },
          pioneer: {
            status: 'limited',
            tooltip: t('comparison.value_tooltips.pioneer_depth_camera')
          },
          master: {
            status: 'yes'
          }
        }
      }
    ]
  },

  {
    category: t('comparison.categories.ai_robotics'),
    rows: [
      {
        name: t('comparison.features.manipulation'),
        tooltip: t('comparison.tooltips.manipulation'),
        values: {
          lite: { status: 'no' },
          basic: {
            status: 'limited',
            tooltip: t('comparison.value_tooltips.basic_manipulation')
          },
          pioneer: {
            status: 'limited',
            tooltip: t('comparison.value_tooltips.pioneer_manipulation')
          },
          master: { status: 'yes' }
        }
      },
      {
        name: t('comparison.features.computer_vision'),
        tooltip: t('comparison.tooltips.computer_Vision'),
        values: {
          lite: { status: 'no' },
          basic: { status: 'no' },
          pioneer: { status: 'yes' },
          master: { status: 'yes' }
        }
      },
      {
        name: t('comparison.features.navigation'),
        tooltip: t('comparison.tooltips.navigation'),
        values: {
          lite: { status: 'no' },
          basic: { status: 'no' },
          pioneer: {
            status: 'limited',
            tooltip: t('comparison.value_tooltips.pioneer_navigation')
          },
          master: { status: 'yes' }
        }
      },
      {
        name: t('comparison.features.audio_output'),
        tooltip: t('comparison.tooltips.audio_output'),
        values: {
          lite: { status: 'no' },
          basic: { status: 'no' },
          pioneer: {
            status: 'future',
            tooltip: t('comparison.value_tooltips.future_release')
          },
          master: { status: 'limited' }
        }
      }
    ]
  },
  {
    category: t('comparison.categories.customizability'),
    rows: [
      {
        name: t('comparison.features.breadboard_alternative'),
        tooltip: t('comparison.tooltips.breadboard_alternative'),
        values: {
          lite: { status: 'yes' },
          basic: { status: 'yes' },
          pioneer: { status: 'yes' },
          master: { status: 'no' }
        }
      },
      /*  {
          name: t('comparison.features.lego_compatibility'),
          tooltip: t('comparison.tooltips.lego_compatibility'),
          values: {
            lite: { status: 'no' },
            basic: {
              status: 'future',
              tooltip: t('comparison.value_tooltips.future_release_general')
            },
            pioneer: {
              status: 'future',
              tooltip: t('comparison.value_tooltips.future_release_general')
            },
            master: { status: 'no' }
          }
        },*/
      {
        name: t('comparison.features.multiple_microcontrollers'),
        tooltip: t('comparison.tooltips.multiple_microcontrollers'),
        values: {
          lite: { status: 'no' },
          basic: {
            status: 'future',
            tooltip: t('comparison.value_tooltips.multiple_microcontrollers_basic')
          },
          pioneer: {
            status: 'yes',
            tooltip: t('comparison.value_tooltips.multiple_microcontrollers_pioneer')
          },
          master: { status: 'no' }
        }
      },
      {
        name: t('comparison.features.easy_wiring'),
        tooltip: t('comparison.tooltips.easy_wiring'),
        values: {
          lite: { status: 'no' },
          basic: { status: 'yes' },
          pioneer: { status: 'yes' },
          master: { status: 'yes' }
        }
      },
      {
        name: t('comparison.features.upgrade_computer'),
        tooltip: t('comparison.tooltips.upgrade_computer'),
        values: {
          lite: { status: 'no' },
          basic: { status: 'no' },
          pioneer: {
            status: 'yes',
            tooltip: t('comparison.value_tooltips.upgrade_computer_pioneer')
          },
          master: {
            status: 'yes',
            tooltip: t('comparison.value_tooltips.upgrade_computer_master')
          }
        }
      },
      {
        name: t('comparison.features.hardware_models'),
        tooltip: t('comparison.tooltips.hardware_models'),
        values: {
          lite: { text: 'FreeCAD' },
          basic: { text: 'FreeCAD' },
          pioneer: { text: 'FreeCAD' },
          master: { text: 'SolidWorks' }
        }
      }
    ]
  }
]

const statusInfo = {
  yes: {
    icon: 'circle-check',
    class: 'supported'
  },
  limited: {
    icon: 'circle-check',
    class: 'supported-limited'
  },
  future: {
    icon: 'clock',
    class: 'supported-future'
  },
  no: {
    icon: 'xmark',
    class: 'unsupported'
  }
}




function getIcon(status) {
  return statusInfo[status]?.icon || 'circle-xmark'
}

function getClass(status) {
  return statusInfo[status]?.class || 'unsupported'
}
</script>

<template>
  <div class="container">

    <div class="intro">
      <h1>{{ t('comparison.title') }}</h1>

      <p>
        {{ t('comparison.intro') }}
      </p>
    </div>

    <div class="table-responsive">

      <table class="table comparison-table">

        <thead>

          <tr>
            <th class="feature-column">
              Feature
            </th>

            <th v-for="robot in robots" :key="robot.id" class="text-center robot-item">
              <NuxtImg :src="robot.image" :alt="robot.name" width="70" height="70" format="webp" />

              <div class="robot-name">
                {{ robot.name }}
              </div>
            </th>
          </tr>

        </thead>

        <tbody>


          <tr>
            <td class="feature-column">
              {{ t('comparison.prices') }}

              <span class="tooltip-wrapper" @mouseenter="activeTooltip = 'robot-price'"
                @mouseleave="activeTooltip = null">
                <ClientOnly>
                  <FontAwesomeIcon icon="circle-info" />
                </ClientOnly>

                <span v-if="activeTooltip === 'robot-price'" class="tooltip-box">
                  {{ t('comparison.prices_tooltip') }}
                </span>
              </span>
            </td>

            <td v-for="robot in robots" :key="robot.id" class="text-center">
              <div class="robot-price">
                {{ robot.price }}
              </div>
            </td>
          </tr>


          <template v-for="category in features" :key="category.category">

            <tr class="category-row">
              <td :colspan="robots.length + 1">
                {{ category.category }}
              </td>
            </tr>

            <tr v-for="feature in category.rows" :key="feature.name">
              <td class="feature-column">

                {{ feature.name }}

                <span v-if="feature.tooltip" class="tooltip-wrapper" @mouseenter="activeTooltip = feature.name"
                  @mouseleave="activeTooltip = null">
                  <ClientOnly>
                    <FontAwesomeIcon icon="circle-info" />
                  </ClientOnly>

                  <span v-if="activeTooltip === feature.name"
                    :class="['tooltip-box', feature.name === 'Hardware models' ? 'tooltip-box-up' : '']">
                    {{ feature.tooltip }}
                  </span>

                </span>

              </td>

              <td v-for="robot in robots" :key="robot.id" class="text-center">

                <span class="cell-wrapper" @mouseenter="activeTooltip = feature.name + robot.id"
                  @mouseleave="activeTooltip = null">
                  <ClientOnly>
                    <FontAwesomeIcon :icon="getIcon(feature.values[robot.id].status)"
                      :class="getClass(feature.values[robot.id].status)" />
                  </ClientOnly>
                  {{ feature.values[robot.id].text }}
                  <span v-if="feature.values[robot.id].tooltip &&
                    activeTooltip === feature.name + robot.id"
                    :class="['tooltip-box', robot.id === 'master' ? 'tooltip-box-right' : '']">
                    {{ feature.values[robot.id].tooltip }}
                  </span>


                </span>

              </td>

            </tr>

          </template>

        </tbody>

      </table>

    </div>

  </div>


</template>

<style scoped>
.intro {
  text-align: center;
  padding-top: 40px;
  padding-bottom: 25px;
}

.table-responsive {
  overflow-x: auto;
  overflow-y: visible !important;
}

.comparison-table th {
  background-color: #b8d1eb;
  color: white;
}

.robot-item {
  width: 200px;
}

.robot-name {
  margin-top: 8px;
}

.feature-column {
  min-width: 300px;
  font-weight: 600;
}

.category-row td {
  background: #f4f6f8;
  font-weight: bold;
  color: #6089ba;
  border-top: 2px solid #6089ba;
}

.supported {
  color: #28a745;
  font-size: 1.4rem;
}

.supported-limited {
  color: #fbb927;
  font-size: 1.4rem;
}

.supported-future {
  color: rgb(69, 69, 70);
  font-size: 1.4rem;
}

.unsupported {
  color: #dc3545;
  font-size: 1.4rem;
}

.tooltip-wrapper,
.cell-wrapper {
  position: relative;
}

.tooltip-box {
  position: absolute;
  top: 24px;
  left: 0;
  min-width: 200px;
  max-width: 260px;
  background: white;
  color: black;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  z-index: 1000;
  font-size: 0.9rem;
  text-align: left;
  box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
}

.tooltip-box-right {
  left: auto;
  right: 0;
}

.tooltip-box-up {
  top: auto;
  bottom: 24px;
}

.legend {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 50px;
}
</style>