const vscode = require('vscode');
const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');

function activate(context) {
    console.log('🐇 Extension LAPIN activée !');
    
    // Commande pour exécuter le code LAPIN
    let runCommand = vscode.commands.registerCommand('lapin.run', async function () {
        const editor = vscode.window.activeTextEditor;
        
        if (!editor) {
            vscode.window.showErrorMessage('Ouvrez un fichier .lapin d\'abord');
            return;
        }
        
        const document = editor.document;
        
        if (document.languageId !== 'lapin') {
            vscode.window.showErrorMessage('Ce fichier n\'est pas un fichier LAPIN (.lapin ou .lap)');
            return;
        }
        
        const filePath = document.fileName;
        const extensionPath = context.extensionPath;
        const lapinInterpreter = path.join(extensionPath, 'lapin.py');
        
        // Vérifier si l'interpréteur existe
        if (!fs.existsSync(lapinInterpreter)) {
            vscode.window.showErrorMessage('Interpréteur LAPIN introuvable !');
            return;
        }
        
        // Détecter Python (python3 ou python)
        const pythonCommand = await detectPython();
        if (!pythonCommand) {
            vscode.window.showErrorMessage('Python n\'est pas installé. Installez Python 3.8+');
            return;
        }
        
        vscode.window.showInformationMessage('🐇 Exécution du code LAPIN...');
        
        // Créer un terminal pour l'exécution
        const terminal = vscode.window.createTerminal('🐇 LAPIN');
        terminal.show();
        
        // Commande d'exécution
        const command = `"${pythonCommand}" "${lapinInterpreter}" "${filePath}"`;
        terminal.sendText(command);
    });
    
    context.subscriptions.push(runCommand);
    
    // Bouton dans la barre d'état
    const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.text = "$(play) 🐇 Run";
    statusBarItem.tooltip = "Exécuter le code LAPIN";
    statusBarItem.command = 'lapin.run';
    statusBarItem.show();
    
    context.subscriptions.push(statusBarItem);
    
    // Masquer le bouton quand pas de fichier LAPIN
    vscode.window.onDidChangeActiveTextEditor((editor) => {
        if (editor && editor.document.languageId === 'lapin') {
            statusBarItem.show();
        } else {
            statusBarItem.hide();
        }
    });
}

// Fonction pour détecter Python
function detectPython() {
    return new Promise((resolve) => {
        exec('python3 --version', (error) => {
            if (!error) {
                resolve('python3');
            } else {
                exec('python --version', (error2) => {
                    if (!error2) {
                        resolve('python');
                    } else {
                        resolve(null);
                    }
                });
            }
        });
    });
}

function deactivate() {
    console.log('Extension LAPIN désactivée');
}

module.exports = {
    activate,
    deactivate
};