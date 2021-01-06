import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import FooterCmp from '@/components/FooterCmp.vue'

describe('FooterCmp.vue', () => {
  it('renders props.contactInfo when passed', () => {
    const contactInfo = {
      firstName: 'Rainer',
      lastName: 'Gonzalez',
      companyName: 'IMC_di',
      email: 'rgonzalez@imcdi.com',
      phone: '+18000000000',
      cellPhone: '+18000000000',
      city: 'Palm Beach Gardens',
      state: 'FL',
      postalCode: '33410',
    }
    const wrapper = shallowMount(FooterCmp, {
      propsData: { contactInfo }
    })
    expect(wrapper.text()).to.include(contactInfo)
  })
})
