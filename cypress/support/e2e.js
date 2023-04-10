import './commands'
import './customCommands/standard.actions.cy'

beforeEach(()=>{
    Cypress.on('uncaught:exception', ()=>{
        return false
    })
})